"use client";

import React, { forwardRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";

import styles from "../styles/Flipbook.module.css";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const bookWidth = isMobile ? windowWidth - 40 : 550;
  const bookHeight = isMobile ? bookWidth * 1.414 : 778;

  return (
    <section className={styles.container}>
      <Document file={file} onLoadSuccess={onLoadSuccess}>
        {numPages > 0 && (
          <HTMLFlipBook
            style={{}}
            width={bookWidth}
            height={bookHeight}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1414}
            maxShadowOpacity={0.5}
            showCover
            mobileScrollSupport
            className={styles.book}
            startPage={0}
            drawShadow
            flippingTime={700}
            usePortrait={isMobile}
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
                  width={bookWidth}
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