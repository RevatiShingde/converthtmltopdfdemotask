import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pdf-generator';
  employeeData = [
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
  ] 
  
//  generatePDF() {
//   const doc = new jsPDF({
//     orientation: 'p',  
//     unit: 'mm',        
//     format: 'a4'       
//   });

  
//   const contentElement : any | null = document.getElementById('pdf-content');

//   const options = {
//     background: '#fff',   
//     scale: 1,            
//     logging: true         
//   };

//   html2canvas(contentElement, options).then(canvas => {
//     const imgData = canvas.toDataURL('image/png');
//     const imgProps = doc.getImageProperties(imgData);
//     const pdfWidth = doc.internal.pageSize.getWidth();
//     let pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//     doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

//     let remainingHeight = imgProps.height - pdfHeight;
//     let currentPage = 1;

//     while (remainingHeight > 0) {
//       doc.addPage();  

//       pdfHeight = Math.min(imgProps.height, remainingHeight);
//       doc.addImage(imgData, 'PNG', 0, -imgProps.height + remainingHeight, pdfWidth, pdfHeight);

//       remainingHeight -= pdfHeight;
//       currentPage++;

//       doc.text(`Page ${currentPage}`, pdfWidth / 2, pdfHeight + 10, { align: 'center' });
//     }

//     doc.save('sample.pdf');
//   });
// }

generatePDF() {
  const DATA  : any | null= document.getElementById('pdf-content');
  const pdf = new jsPDF('p', 'mm', 'a4');
  const options: any = {
    pagesplit: true,
    background: '#fff'
  };

  html2canvas(DATA, options).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.text('Page 1', pdfWidth / 2, pdfHeight + 10, { align: 'center' });

    pdf.addPage();
    pdf.text('Page 2', pdf.internal.pageSize.getWidth() / 2, 10, { align: 'center' });

    pdf.addPage();
    pdf.text('Page 3', pdf.internal.pageSize.getWidth() / 2, 10, { align: 'center' });

    pdf.save('sample.pdf');
  });
}
}
