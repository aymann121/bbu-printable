import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Component } from '@angular/core';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  generatePdf() {
    const docDefinition = {
      content: [
        {
          text: 'This is a PDF generated from Angular!',
          fontSize: 24,
          bold: true,
        },
        {
          text: 'You can create dynamic content here.',
        },
      ],
    };

    const pdfDoc = pdfMake.createPdf(docDefinition);
    pdfDoc.download('my-report.pdf');
  }
}