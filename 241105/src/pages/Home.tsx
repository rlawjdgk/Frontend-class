import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getMovies, GetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Container = styled.main`
  width: 100%;
  height: 3000px;
  margin-top: 60px;
  background: ${({ theme }) => theme.black.darker};
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: ${({ theme }) => theme.red};
`;

const Banner = styled.div<{ $bgImg: string }>`
  color: ${({ theme }) => theme.white.darker};
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;
  background: linear-gradient(to right, #000, #0000),
    url(${({ $bgImg }) => $bgImg}) center/cover no-repeat;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 20px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  top: -100px;
  width: 100%;
`;

const Row = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  margin-bottom: 10px;
`;

const Box = styled(motion.div)<{ $bgImg: string }>`
  width: auto;
  height: 200px;
  background: url(${({ $bgImg }) => $bgImg}) center/cover no-repeat;
  font-size: 22px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const rowVariants = {
  hidden: {
    x: window.innerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth - 10,
  },
};

const boxVariants = {
  normal: { scale: 1 },
  hover: { scale: 1.3, y: -50, transition: { delay: 0.5, type: "tween" } },
};

const offset = 6;
const Home = () => {
  const [sliderIdx, setSliderIdx] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const { data, isLoading } = useQuery<GetMoviesResult>({
    queryKey: ["nowPlayingMovies"],
    queryFn: getMovies,
  });

  const increaseSliderIdx = () => {
    if (data) {
      if (leaving) return;
      setLeaving(true);
      const totalMovies = data.results.length - 2;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      setSliderIdx((current) => (current === maxIndex ? 0 : current + 1));
    }
  };

  const toggleLeaving = () => {
    setLeaving((current) => !current);
  };

  return (
    <Container>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseSliderIdx}
            $bgImg={makeImagePath(data?.results[1].backdrop_path as string)}
          >
            <Title>{data?.results[1].original_title}</Title>
            <Overview>{data?.results[1].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                key={sliderIdx}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
              >
                {data?.results
                  .slice(2)
                  .slice(sliderIdx * offset, sliderIdx * offset + offset)
                  .map((movie) => (
                    <Box
                      key={movie.id}
                      variants={boxVariants}
                      $bgImg={makeImagePath(movie.backdrop_path || "")}
                      initial="normal"
                      whileHover="hover"
                    >
                      {movie.title}
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Container>
  );
};
export default Home;
