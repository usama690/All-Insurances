import styled from "@emotion/styled";
import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 5,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 15,
    width: 15,
    backgroundColor: "#00C09A",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "#B9B9B9",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#B9B9B9",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const RootBox = styled(Box)(
  `background:black;
    height:100vh
    `
);

const options = [
  {
    label: "New to Bank (NTB)",
    value: 10,
  },
  {
    label: "EXISTING CUSTOMER",
    value: 20,
  },
  {
    label: "REPEAT CARLOAN CUSTOMER",
    value: 30,
  },
];

const CarLoanCalculator = () => {
  const [customerCategory, setCustomerCategory] = useState('');
  const [vehiclePrice, setVehiclePrice] = useState(200000);
  const [toRepayIn, setToRepayIn] = useState(12); // months
  const [securityDeposit, setSecurityDeposit] = useState(15); // percentage
  const [secDepVal, setSecDepVal] = useState(0); // security deposit amount
  const [financedAmount, setFinancedAmount] = useState(0); // financed amount
  const [install, setInstall] = useState(0); // installment amount

  const handleChange = (e) => {
    setCustomerCategory(e.target.value);
  };

  const handleVehiclePriceChange = (e) => {
    console.log(e.target.value);
    setVehiclePrice(e.target.value);
    const installVal = ((e.target.value - secDepVal) / toRepayIn).toFixed(2);
    const financeVal = e.target.value - secDepVal;
    const secVal = (e.target.value / 100) * securityDeposit;
    setInstall(installVal);
    setFinancedAmount(financeVal);
    setSecDepVal(secVal);
  };
  const handleMonthChange = (e) => {
    setToRepayIn(e.target.value);
    const installVal = ((vehiclePrice - secDepVal) / e.target.value).toFixed(2);
    setInstall(installVal);
  };
  const handlePercentChange = (e) => {
    setSecurityDeposit(e.target.value);
    const installVal = ((vehiclePrice - secDepVal) / toRepayIn).toFixed(2);
    const financeVal = vehiclePrice - secDepVal;
    const secVal = (vehiclePrice / 100) * e.target.value;
    setInstall(installVal);
    setFinancedAmount(financeVal);
    setSecDepVal(secVal);
  };

  useEffect(() => {
    setSecDepVal((vehiclePrice / 100) * securityDeposit);
  }, [vehiclePrice, securityDeposit]);

  useEffect(() => {
    setFinancedAmount(vehiclePrice - secDepVal);
  }, [secDepVal, vehiclePrice]);

  useEffect(() => {
    setInstall((financedAmount / toRepayIn).toFixed(2));
  }, [financedAmount, toRepayIn]);

  return (
    <RootBox paddingTop="2rem">
      <Typography textAlign={"center"} variant="h4" color="#00C09A">
        {" "}
        HBL CARLOAN{" "}
      </Typography>
      <Box display="flex" width="60%" margin="auto" flexDirection="column">
        <Box style={{margin:"5px"}}width="100%">
          <Typography variant="h6" color="#00C09A" fontWeight="700">
            CUSTOMER CATEGORY
          </Typography>
          <Select
            variant="standard"
            value={customerCategory}
            onChange={handleChange}
            style={{color:"white",borderBottom:"1px solid",width:"100%"}}
            label="Age"
          >
            {options.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </Box>

        <Box>
          <Typography color="#00C09A">VEHICLE PRICE</Typography>
          <Box display="flex">
            <Box width="85%">
              <PrettoSlider
                style={{ width: "98%" }}
                aria-label="pretto slider"
                onChange={handleVehiclePriceChange}
                value={vehiclePrice}
                step={100000}
                min={200000}
                max={10000000}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              border="1px solid #2f3132"
              width="15%"
              height="30px"
              padding="0 7px"
            >
              {" "}
              <Typography variant="caption" color="white">
                PKR
              </Typography>{" "}
              <Typography color="#00C09A">{vehiclePrice}</Typography>{" "}
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography color="#00C09A"> TO REPAY IN</Typography>
          <Box display="flex">
            <Box width="85%">
              <PrettoSlider
                style={{ width: "98%" }}
                aria-label="pretto slider"
                onChange={handleMonthChange}
                step={12}
                min={12}
                max={84}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              border="1px solid #2f3132"
              width="15%"
              height="30px"
              padding="0 7px"
            >
              {" "}
              <Typography variant="caption" color="white">
                MONTHS
              </Typography>{" "}
              <Typography color="#00C09A">{toRepayIn}</Typography>{" "}
            </Box>
          </Box>
        </Box>

        <Box>
          <Typography color="#00C09A"> SECURITY DEPOSIT</Typography>
          <Box display="flex">
            <Box width="80%">
              <PrettoSlider
                style={{ width: "98%" }}
                aria-label="pretto slider"
                onChange={handlePercentChange}
                step={5}
                min={15}
                max={50}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              border="1px solid #2f3132"
              width="20%"
              height="30px"
              padding="0 7px"
            >
              {" "}
              <Typography variant="caption" color="white">
                PERCENTAGE
              </Typography>{" "}
              <Typography color="#00C09A">{securityDeposit}%</Typography>{" "}
            </Box>
          </Box>
        </Box>

        <Box className="d-flex text-white">
          <Box>
            <Typography>YOUR</Typography>
            <Typography>MONTHLY</Typography>
            <Typography>INSTALLMENTS</Typography>
            <Typography>WILL BE JUST</Typography>
          </Box>
          <span style={{borderLeft:"1px solid",height:"90px",position:"absolute",left:"30%",marginLeft:".5%",marginRight:".7%"}}/>
          &nbsp;&nbsp;&nbsp;
          <Box>
            <Typography>PKR</Typography>
            <Typography color="#00C09A">{install}</Typography>
          </Box>
          <span color="#00C09A" />
          <Box className="ms-5">
            <Typography>FINANCED AMOUNT</Typography>
            <Box>
              {" "}
              <Typography>PKR</Typography>{" "}
              <Typography color="#00C09A">{financedAmount}</Typography>
            </Box>
          </Box>
          <Box className="ms-4">
            <Typography>SECURITY DEPOSIT</Typography>
            <Box>
              {" "}
              <Typography>PKR</Typography>{" "}
              <Typography color="#00C09A">{secDepVal}</Typography>
            </Box>
          </Box>
        </Box>

      </Box>
    </RootBox>
  );
};

export default CarLoanCalculator;
