"use client";

import React, { forwardRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";

import styles from "../styles/Flipbook.module.css";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface FlipbookProps {
  file: string;
}

interface FlipPageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const FlipPage = forwardRef<HTMLDivElement, FlipPageProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

FlipPage.displayName = "FlipPage";

export default function Flipbook({ file }: FlipbookProps) {
  const [numPages, setNumPages] = useState(0);

  function onLoadSuccess({
    numPages,
  }: {
    numPages: number;
  }) {
    setNumPages(numPages);
  }

  return (
    <section className={styles.container}>
      <Document file={file} onLoadSuccess={onLoadSuccess}>
        {numPages > 0 && (
          <HTMLFlipBook
            style={{}}
            width={450}
            height={650}
            size="stretch"
            minWidth={280}
            maxWidth={700}
            minHeight={400}
            maxHeight={900}
            maxShadowOpacity={0.5}
            showCover
            mobileScrollSupport
            className={styles.book}
            startPage={0}
            drawShadow
            flippingTime={700}
            usePortrait
            startZIndex={0}
            autoSize
            clickEventForward
            useMouseEvents
            swipeDistance={30}
            showPageCorners
            disableFlipByClick={false}
          >
            {Array.from({ length: numPages }).map((_, index) => (
              <FlipPage
                key={index}
                className={styles.page}
              >
                <Page
                  pageNumber={index + 1}
                  width={430}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </FlipPage>
            ))}
          </HTMLFlipBook>
        )}
      </Document>
    </section>
  );
}