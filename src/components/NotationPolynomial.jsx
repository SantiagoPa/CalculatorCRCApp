import { Typography } from "@mui/material";

export const NotationPolynomial = ({ polynomial }) => {
  const definePoly = (poly, idx) => {
    if (poly > 1) {
      return (
        <span>
          X<sup>{poly}</sup>
        </span>
      );
    }

    if (poly === 1) {
      return <span>X</span>;
    }

    if (poly === 0) {
      return <span>1</span>;
    }
  };

  const defineMas = (idx) => {
    const len = polynomial.length - 1;
    if (idx < len) {
      return "+";
    }
  };

  return (
    <>
      {polynomial?.map((poly, idx) => (
        <Typography component="span" key={`__${idx}__`} sx={{ fontWeight: 800 }}>
          {definePoly(poly)}
          {defineMas(idx)}
        </Typography>
      ))}
    </>
  );
};
