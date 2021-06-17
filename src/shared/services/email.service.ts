import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { readFileSync } from 'fs';
import { render } from 'mustache';
import { createTransport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

@Injectable()
export class EmailService {

    private readonly transporter: Mail;

    constructor(configService: ConfigService) {
        const { host, port, username: user, password: pass } = configService.get('smtp');
        this.transporter = createTransport({ service: 'gmail', host, port, auth: { user, pass } });
    }

    sendMail(mailOptions: Mail.Options): Promise<any> {
        return this.transporter.sendMail({ from: 'Beauty Up', ...mailOptions });
    }

    sendMailTemp(mailOptions: Mail.Options, model: any, templateFile: string): Promise<any> {
        const template = readFileSync(`public/templates/${templateFile}.template`);
        return this.sendMail({
            ...mailOptions,
            html: render(template.toString(), model)
        });
    }
}
