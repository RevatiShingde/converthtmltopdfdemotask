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
  companyLogo: string = "psm Tech";
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
