

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject
} from '@syncfusion/ej2-react-pdfviewer';
import PDFViewer from './pdfviewer';


export default function App() {

  return (
    (<div>
      <PDFViewer />
    </div >)
  );
}
