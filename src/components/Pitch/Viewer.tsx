import React, { useState, useEffect } from "react";
import {
  DocumentAskPasswordEvent,
  Viewer,
  Worker,
} from "@react-pdf-viewer/core";
// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const module = await import("@react-pdf-viewer/default-layout");

const ClientSideViewer = ({ fileUrl, theme }: any) => {
  const plugin = module.defaultLayoutPlugin();

  if (!plugin) {
    return <div>Loading PDF viewer...</div>;
  }
  const handleAskPassword = (e: DocumentAskPasswordEvent) => {
    let password = prompt("Please enter the PDF password", "Password");
    e.verifyPassword(password!);
  };
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
      <div style={{ height: "750px", width: "100%" }}>
        <Viewer
          fileUrl={fileUrl}
          plugins={[plugin]}
          theme={theme}
          onDocumentAskPassword={handleAskPassword}
        />
      </div>
    </Worker>
  );
};

export default ClientSideViewer;
