import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  {
    name: "Marcos",
    email: "mrcsmotta1@gmail.com",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendEmail({
      to: { name: "Marcos Motta", email: "mrcsmotta1@gmail.com" },
      message: { subject: "Ben-vindo ao sistema", body: "Seja bem vindo" },
    });
    return res.json({ message: "email enviado" });
  },
};
