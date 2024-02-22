import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Layout from "../layout";

import type { DocumentAskPasswordEvent } from "@react-pdf-viewer/core";

const IndexPage = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const handleAskPassword = (e: DocumentAskPasswordEvent) => {
    let password = prompt("Please enter the PDF password", "Password");
    e.verifyPassword(password!);
  };
  return (
    <Layout>
      <div style={{ marginTop: 92 }}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
          <div
            style={{
              height: "750px",
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Viewer
              onDocumentAskPassword={handleAskPassword}
              theme={"dark"}
              fileUrl="/pitch/phoenix_deck.pdf"
              plugins={[defaultLayoutPluginInstance]}
            />
          </div>
        </Worker>
      </div>
    </Layout>
  );
};

export default IndexPage;
