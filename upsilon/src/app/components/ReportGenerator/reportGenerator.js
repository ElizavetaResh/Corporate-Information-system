import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

function generatePDF(props) {
  const tasks = props;
  const tableBody = tasks.map((task, index) => [
    index + 1,
    task.name,
    task.employer,
    task.faculty,
    task.education,
    `${task.workername} ${task.workersurname}`,
    
  ]);

  const documentDefinition = {
    content: [
      { text: "Отчет", style: "header" },
      {
        style: "tableExample",
        table: {
          widths: [50,100, 75, 70, 100, 70],
          headerRows: 1,
          body: [[
            "Номер",
            "Название",
            "Название организации",
            "Факультет",
            "Уровень образования",
            "Контактное лицо",
          ], ...tableBody],
        },
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10],
      },
      tableExample: {
        margin: [0, 5, 0, 15],
      },
    },
  };

  pdfMake.createPdf(documentDefinition).download("report.pdf");
}

export default generatePDF;
