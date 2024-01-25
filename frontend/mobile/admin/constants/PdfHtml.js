export function SharePdf(title, total, header, body) {
    const today = new Date()
    const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    const headerCells = header.map((item) => `
        <td style="width:182pt;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#C6C6C6" bgcolor="#19BC9B">
            <p class="s4" style="padding-top: 4pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">${item}</p>
        </td>`
    ).join('');

    const generateTableHeader = Object.keys(body[0]).map((key) => (`
        <th style="width:182pt;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#C6C6C6" bgcolor="#19BC9B" 
            key=${key}>
            <p class="s4" style="padding-top: 4pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">
                ${key.charAt(0).toUpperCase() + key.slice(1)}
            </p>        
        </th>`
    )).join('');

    const generateTableBody = body.map((data) => (`
        <tr style="width:182pt;border-top: 1pt solid #C6C6C6; border-left: 1pt solid #C6C6C6; border-bottom: 1pt solid #C6C6C6; border-right: 1pt solid #C6C6C6;" 
            key=${data.id}>
                <p style="padding-top: 4pt; padding-left: 4pt; text-indent: 0pt; text-align: left;">
                    <a class="s5">
                        ${Object.values(data).map((value, index) => (
                            `<td key=${index}>${value}</td>`
                         ))}
                    </a>
                </p>
        </tr>`
    )).join('');

    return `<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>${title}</title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
            text-indent: 0;
        }

        .s1 {
            color: black;
            font-family: Arial, sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 24pt;
        }

        .s2 {
            color: #999;
            font-family: Arial, sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 12pt;
        }

        h1 {
            color: black;
            font-family: Arial, sans-serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 16pt;
        }

        p {
            color: #999;
            font-family: Arial, sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
            margin: 0pt;
        }

        .a,
        a {
            color: #999;
            font-family: Arial, sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        .s3 {
            color: black;
            font-family: Arial, sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 20pt;
        }

        .s4 {
            color: #FFF;
            font-family: Arial, sans-serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 10pt;
        }

        .s5 {
            color: #505050;
            font-family: Arial, sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        .s6 {
            color: #505050;
            font-family: Arial, sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        table,
        tbody {
            vertical-align: top;
            overflow: visible;
        }
    </style>
</head>

<body style="padding: 30px;">
    <p class="s1" style="padding-top: 3pt;padding-left: 6pt;text-indent: 0pt;line-height: 26pt;text-align: left;">Staff
        List
    </p>
    <p class="s2" style="padding-left: 6pt;text-indent: 0pt;line-height: 12pt;text-align: left;">Generated on ${date}
    </p>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <h1 style="padding-top: 7pt;padding-left: 6pt;text-indent: 0pt;text-align: left;">HelaShop Admin</h1>
    <p style="padding-left: 6pt;text-indent: 0pt;text-align: left;">Tel: +94 76 896 5332</p>
    <p style="padding-top: 1pt;padding-left: 6pt;text-indent: 0pt;text-align: left;"><a
            href="mailto:mailus@helashop.com" class="a" target="_blank">Email: </a><a href="mailto:mailus@helashop.com"
            target="_blank">mailus@helashop.com</a></p>
    <p style="text-indent: 0pt;text-align: left;" />
    <p style="padding-top: 1pt;padding-left: 6pt;text-indent: 0pt;text-align: left;">Address: No 221/B, Colombo Road,
        Galle
    </p>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <p class="s3" style="padding-top: 4pt;padding-left: 6pt;text-indent: 0pt;text-align: left;">Total number of clients
        : ${total}
    </p>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <table style="border-collapse:collapse;margin-left:6.05833pt" cellspacing="0">
       <thead>
            ${generateTableHeader}
       </thead>
        <tbody>
            ${generateTableBody}
        </tbody>
    </table>
</body>

</html>`
}