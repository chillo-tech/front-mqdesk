import { axiosInstance } from "@/utils";
import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const { NEXT_PUBLIC_API_URI } = process.env;
    axiosInstance.defaults.baseURL = NEXT_PUBLIC_API_URI;
    const { url: backendUrl = "" } = req;
    if (req.method === "POST") {
      const { data } = await axiosInstance.post(`${backendUrl}`, req.body);
      return res.status(200).json(data);
    } else if (req.method === "PUT") {
      const { data } = await axiosInstance.put(`${backendUrl}`, req.body);
      return res.status(200).json(data);
    } else if (req.method === "PATCH") {
      const { data } = await axiosInstance.patch(`${backendUrl}`, req.body);
      return res.status(200).json(data);
    } else if (req.method === "DELETE") {
      const { data } = await axiosInstance.delete(`${backendUrl}`);
      return res.status(200).json(data);
    } else {
      const { data } = await axiosInstance.get(`${backendUrl}`);
      return res.status(200).json(data);
    }
  } catch (error: any) {
    const axiosError = error as Error | AxiosError;
    if (axios.isAxiosError(axiosError)) {
      const axiosError = error as Error | AxiosError;
      if (axios.isAxiosError(axiosError)) {
        const { status, response } = error;

        if (
          status === 401 ||
          (response && response.status && response.status === 401)
        ) {
          // console.log("error", error);
          console.log("data error", error.response?.data?.error);
          res.status(401).json({ message: "Veuillez vous connecter" });
          return;
        }
        if (
          status === 403 ||
          (response && response.status && response.status === 403)
        ) {
          // console.log("error", error);
          console.log("data error", error.response);
          res.status(401).json(error.response);
          return;
        }
        res
          .status(axiosError.response?.status || 500)
          .json(axiosError.response?.data);
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
}

export default handler;

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};
