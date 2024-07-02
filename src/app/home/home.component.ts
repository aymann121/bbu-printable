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

  docDefinition:any = {
    styles: {
      centeredText: {
        alignment: 'center',
      }
    },
    content: [
      {
        width: '*',
        text: '06/16/2024 - 06/22/2024 Health Summary',
        fontSize: 24,
        bold: true,
        style: 'centeredText',
      },
      {
        table: {
          widths: ["*"],
          body: [
             [
              {
                text: 'This health summary has been created to assist you with efficiently communicating any health concerns from the past week to your healthcare provider!',
                style: {
                  fontSize: 10,
                  alignment: 'center',
                },
              },
            ]
          ]
        }
      },
      {
        table: {
          widths: ["*"],
          heights: [500],
          body: [
             [
              {
                text: 'I\'m aligned center',
                style: {
                  alignment: 'center',
                },
              },
            ]
          ]
          
        },
        margin: [0, 20, 0, 0]
        // relativePosition: {
        //           x: 0,
        //           y: 25,
        // }
      },
      {
        table: {
          widths: ["*"],
          heights: [100],
          body: [
             [
              {
                text: 'I\'m aligned center',
                style: {
                  alignment: 'center',
                },
              },
            ]
          ]
          
        },
        margin: [0, 20, 0, 2]   
        // relativePosition: {
        //           x: 0,
        //           y: 25,
        // }
      },
    
    ],
  };

  link:string = ""

  //uncomment this if you want to open the pdf in a new tab everytime you make a change
  // dataUrl = pdfMake.createPdf(this.docDefinition).getDataUrl((result) =>{window.open(result, "_blank")});
  
  pdfDoc = pdfMake.createPdf(this.docDefinition);

  generatePdf() {
    this.pdfDoc.download('my-report.pdf');
    // console.log(this.dataUrl)
  }

}

