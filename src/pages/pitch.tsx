import { useState, useEffect } from "react";
import { Worker } from "@react-pdf-viewer/core";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Layout from "../layout";

import ClientSideViewer from "../components/Pitch/Viewer";

const PitchPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Layout>
      <div style={{ marginTop: 92 }}>
        {isClient && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
            <div
              style={{
                height: "750px",
                width: "100%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {" "}
              <ClientSideViewer
                fileUrl="/pitch/phoenix_deck.pdf"
                theme="dark"
              />
            </div>
          </Worker>
        )}
      </div>
    </Layout>
  );
};

export default PitchPage;
