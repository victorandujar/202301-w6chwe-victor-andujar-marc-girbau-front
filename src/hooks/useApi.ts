import { useCallback } from "react";
import { loadRobotsActionCreator } from "../store/features/robotsSlice";
import { useAppDispatch } from "../store/hooks";
import { RobotsStructure } from "../types/types";

const useApi = () => {
  const dispatch = useAppDispatch();

  const getRobots = useCallback(async () => {
    try {
      const response = await fetch(process.env.REACT_URL_API!);
      const robots = (await response.json()) as RobotsStructure;
      dispatch(loadRobotsActionCreator(robots));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  return { getRobots };
};

export default useApi;