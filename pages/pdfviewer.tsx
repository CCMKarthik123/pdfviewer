import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  Inject,
  FormDesigner,
} from '@syncfusion/ej2-react-pdfviewer';


let viewer:any;
let exportObject:any;


const PDFViewer = () => (
  <>
    <br />
    <br />
    <br />

    <PdfViewerComponent
      id="container"
      ref={(scope) => {
        viewer = scope;
      }}
      documentPath="https://cdn.syncfusion.com/content/pdf/annotations.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/25.1.40/dist/ej2-pdfviewer-lib"
      style={{ height: '640px' }}
    >
      <Inject
        services={[
          Toolbar,
          Magnification,
          Navigation,
          LinkAnnotation,
          BookmarkView,
          ThumbnailView,
          Print,
          TextSelection,
          TextSearch,
          Annotation,
          FormFields,
          FormDesigner,
        ]}
      />
    </PdfViewerComponent>
  </>
);

export default PDFViewer;