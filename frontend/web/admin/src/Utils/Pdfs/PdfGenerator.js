
import jsPDF from "jspdf";
import 'jspdf-autotable'
import DateFormatter from "../Constants/DateFormatter";

class PdfGenerator {
    generatePdf(data, titles, headers) {
        const name = titles
        const pdf_title = name
        const pdf_email = "mailus@helashop.com"
        const pdf_tel = "+94 76 896 5332"
        const pdf_address = " No 221/B, Colombo Road, Galle";

        const doc = new jsPDF("portrait", "px", "a4", false)
        const today = new Date()
        const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

        const title = `${pdf_title}`;
        doc.setFont("helvetica");
        doc.setTextColor("#000000");

        doc.setFontSize(24);
        doc.text(title, 30, 30);
        doc.setFontSize(12);
        doc.setTextColor("#999999");
        doc.text(`Generated on ${date}`, 30, 40);
        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.setTextColor("#000000");
        doc.text("HelaShop Admin", 30, 70);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor("#999999");
        doc.text(`Tel: ${pdf_tel}`, 30, 80);
        doc.text(`Email: ${pdf_email}`, 30, 90);
        doc.text(`Address: ${pdf_address}`, 30, 100);
        doc.line(30, 110, 600, 110);

        doc.setTextColor("#000000");

        doc.setFontSize(20);
        doc.text(`Total number of clients : ${data.length}`, 30, 135);

        // Add table with data
        doc.setTextColor("#999999");
        doc.setFontSize(12);
        doc.setTextColor("#000000");

        //add the body dynamically mathcing to header
        const body = data.map(item => {
            const rowData = headers.map(header => {
                const propName = header.toLowerCase();
                if (propName === "created_at" && item[propName]) {
                    const formattedDate = DateFormatter.formatDate(item[propName]);
                    return formattedDate;
                }
                return item[propName];
            })
            return rowData
        })

        doc.autoTable({
            startY: 145,
            head: [headers],
            body: body,
            theme: "grid"
        })
        doc.save(`${name}.pdf`)
    }
}
export default PdfGenerator = new PdfGenerator()