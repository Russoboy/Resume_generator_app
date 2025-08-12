import { useQuery } from "@tanstack/react-query";
import api from "../services/api";
import { Resume } from "../types/resume";

async function fetchResume(): Promise<Resume> {
  const res = await api.get("/legacy/resume?page=1&limit=1");
  const resumeId = res.data.data[0].id;
  const resumeRes = await api.get(`/legacy/resume/${resumeId}`);
  return resumeRes.data;
}

export function useResumeData() {
  return useQuery(["resume"], fetchResume, {
    staleTime: 5 * 60 * 1000,
  });
}
