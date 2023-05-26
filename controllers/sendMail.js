const nodemailer = require("nodemailer");


const sendMail = async(req,res)=>{
    let testAccount = await nodemailer.createTestAccount();

    //connect with the smtp

    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
        user: 'neva.schuster@ethereal.email',
        pass: '9GwEWtxC4uMWYUGhnU'
    },
});

let info = await transporter.sendMail({
    from: '"Abhishek 👻" <abhishek@gmail.com>', // sender address
    to: "mayankkumar99001@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
})

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.json(info)
}

module.exports = sendMail;