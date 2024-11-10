import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useMatch, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { getMovies, GetMoviesResult } from "../api";
import { makeImagePath } from "../utils";

const Container = styled.main`
  width: 100%;
  height: 2000px;
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
  position: relative;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  h4 {
    text-align: center;
    font-size: 16px;
    color: ${(props) => props.theme.red};
  }
`;

const ModalBox = styled(motion.div)`
  position: fixed;
  top: scrollY.get() + 100;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 40vw;
  height: 80vh;
  background: ${(props) => props.theme.black.lighter};
  color: ${(props) => props.theme.white.darker};
  border-radius: 8px;
  overflow: hidden;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const MovieCover = styled.div`
  width: 100%;
  height: 400px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const MovieTitle = styled.h3`
  color: ${(props) => props.theme.white.darker};
  font-size: 28px;
  padding: 20px;
  position: relative;
  top: -80px;
`;

const MovieOverView = styled.p`
  padding: 20px;
  line-height: 2;
  font-size: 20px;
  position: relative;
  top: -60px;
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
  hover: {
    scale: 1.3,
    y: -50,
    transition: { delay: 0.5, duration: 0.3, type: "tween" },
  },
};

const infoVariants = {
  hover: {
    opacity: 0.8,
    transition: { delay: 0.5, duration: 0.3, type: "tween" },
  },
};

const offset = 6;
const Home = () => {
  const history = useNavigate();
  const movieMatch: PathMatch<string> | null = useMatch("/movies/:movieId");
  const { data, isLoading } = useQuery<GetMoviesResult>({
    queryKey: ["nowPlayingMovies"],
    queryFn: getMovies,
  });

  const [sliderIdx, setSliderIdx] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const { scrollY } = useScroll();

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

  const onBoxClick = (movieId: number) => {
    history(`/movies/${movieId}`);
  };

  const onOverlayClick = () => {
    history(`/`);
  };

  const clickedMovie =
    movieMatch?.params.movieId &&
    data?.results.find(
      (movie) => String(movie.id) === movieMatch.params.movieId
    );
  // const clickedMovie =
  //   movieMatch?.params.movieId &&
  //   data?.results.find(
  //     (movie) => movie.id === Number(movieMatch.params.movieId)
  //   );

  console.log(clickedMovie);
  return (
    <Container>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseSliderIdx}
            $bgImg={makeImagePath(data?.results[0].backdrop_path as string)}
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
                      onClick={() => onBoxClick(movie.id)}
                      key={movie.id}
                      layoutId={movie.id + ""}
                      variants={boxVariants}
                      $bgImg={makeImagePath(movie.backdrop_path || "")}
                      initial="normal"
                      whileHover="hover"
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {movieMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <ModalBox
                  layoutId={movieMatch.params.movieId}
                  style={{ top: scrollY.get() + 60 }}
                >
                  {clickedMovie && (
                    <>
                      <MovieCover
                        style={{
                          backgroundImage: `linear-gradient(to top, #000, transparent), url(${makeImagePath(
                            clickedMovie.backdrop_path,
                            "w500"
                          )})`,
                        }}
                      />

                      <MovieTitle>{clickedMovie.title}</MovieTitle>
                      <MovieOverView>{clickedMovie.overview}</MovieOverView>
                    </>
                  )}
                </ModalBox>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Container>
  );
};
export default Home;
