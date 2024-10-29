import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0;
  margin-top: 50px;
`;
const Header = styled.header`
  font-size: 32px;
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
  margin-bottom: 20px;
`;
const CoinList = styled.ul`
  width: 900px;
`;
const Coin = styled.li`
  width: 100%;
  background: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.bgColor};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 14px;
  display: flex;
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    color: inherit;
    transition: color 0.3s;
    margin: 0 20px;
    &:hover {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;
const Loader = styled.span`
  color: ${({ theme }) => theme.accentColor};
  font-size: 22px;
`;

const Img = styled.img`
  width: 35px;
  height: auto;
  margin: 0 10px;
`;

// const coins = [
//   {
//     id: "btc-bitcoin",
//     name: "Bitcoin",
//     symbol: "BTC",
//     rank: 1,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
//   {
//     id: "eth-ethereum",
//     name: "Ethereum",
//     symbol: "ETH",
//     rank: 2,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
//   {
//     id: "sol-solana",
//     name: "Solana",
//     symbol: "SOL",
//     rank: 3,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
// ];
interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
const Coins = () => {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/Divjason/coindata/refs/heads/main/coins.json"
      );
      const json = await response.json();
      setCoins(json.slice(0, 1000));
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>Coin List</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={`${coin.name}`}>
                📜Now Rank: {coin.rank}
                <Img
                  src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} ({coin.symbol}) &rarr; {coin.name}
                information
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};
export default Coins;
