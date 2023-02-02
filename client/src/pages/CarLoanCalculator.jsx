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

const RootBox = styled(Box)();

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

const CarLoanCalculator = ({bank_name}) => {

  let vehicleAmount = 0
  let bankName = ''
  if(bank_name === 'alfalah')  {
    vehicleAmount = 200000
    bankName = 'ALFALAH'
  } 
  if(bank_name === 'faisal'){
    vehicleAmount = 180000
    bankName = 'FAISAL'
  }  
  if(bank_name === 'hbl') {
    vehicleAmount = 150000
    bankName = 'HBL'
  }
  if(bank_name === 'mcb'){
    vehicleAmount = 130000
    bankName = 'MCB'
  } 
  if(bank_name === 'meezan') {
    vehicleAmount = 100000
    bankName = 'MEEZAN'
  }  
  
  const [customerCategory, setCustomerCategory] = useState(options[0].value);
  const [vehiclePrice, setVehiclePrice] = useState(vehicleAmount);
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
      <Typography textAlign={"center"} variant="h4" color="black">
        {bankName} BANK CARLOAN CALCULATOR
      </Typography>
      <Box display="flex" width="60%" margin="auto" flexDirection="column" marginTop="2rem">
        <Box margin="5px" width="100%">
          <Typography variant="h6" color="black" fontWeight="700" marginBottom="10px">
            CUSTOMER CATEGORY
          </Typography>
          <Select
            variant="standard"
            displayEmpty
            value={customerCategory}
            onChange={handleChange}
            style={{ color: "black", borderBottom: "1px solid", width: "100%",background:"transparent" }}
            label="Age"
          >
            {options.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </Box>

        <Box marginTop="1.5rem">
          <Typography color="black">VEHICLE PRICE</Typography>
          <Box display="flex" gap="3rem" >
            <Box width="80%">
              <PrettoSlider
                style={{ width: "100%" }}
                aria-label="pretto slider"
                onChange={handleVehiclePriceChange}
                value={vehiclePrice}
                step={100000}
                min={vehicleAmount}
                max={10000000}
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
              <Typography variant="caption" color="black">
                PKR
              </Typography>{" "}
              <Typography color="black">{vehiclePrice}</Typography>{" "}
            </Box>
          </Box>
        </Box>
        <Box marginTop="1rem" >
          <Typography color="black"> TO REPAY IN</Typography>
          <Box display="flex" gap="3rem">
            <Box width="80%">
              <PrettoSlider
                style={{ width: "100%" }}
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
              width="20%"
              height="30px"
              padding="0 7px"
            >
              {" "}
              <Typography variant="caption" color="black">
                MONTHS
              </Typography>{" "}
              <Typography color="black">{toRepayIn}</Typography>{" "}
            </Box>
          </Box>
        </Box>

        <Box marginTop="1rem">
          <Typography color="black"> SECURITY DEPOSIT</Typography>
          <Box display="flex" gap="3rem">
            <Box width="80%">
              <PrettoSlider
                style={{ width: "100%" }}
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
              <Typography variant="caption" color="black">
                PERCENTAGE
              </Typography>{" "}
              <Typography color="black">{securityDeposit}%</Typography>{" "}
            </Box>
          </Box>
        </Box>

        <Box display="flex" marginTop="2rem" >
          <Box borderRight="1px solid gray">
            <Typography textAlign="right" paddingRight="10px" >YOUR</Typography>
            <Typography textAlign="right" paddingRight="10px" >MONTHLY</Typography>
            <Typography textAlign="right" paddingRight="10px">INSTALLMENTS</Typography>
            <Typography textAlign="right" paddingRight="10px">WILL BE JUST</Typography>
          </Box>
          <Box paddingTop="15px" paddingLeft="8px" paddingRight="7rem" borderRight="1px solid gray" >
            <Typography variant="caption" color="black">
              PKR
            </Typography>
            <Typography color="black">{install}</Typography>
          </Box>

          <Box display="flex" alignItems="flex-end" gap="3rem" paddingLeft="8px" >
            <Box>
              <Typography textAlign="center" >FINANCED AMOUNT</Typography>
              <Box display="flex" justifyContent="space-between" border="1px solid #2f3132" alignItems="center" padding="0 5px" width="200px"  >
                <Typography variant="caption"  >PKR</Typography>
                <Typography color="black">{financedAmount}</Typography>
              </Box>
            </Box>
            <Box>
              <Typography textAlign="center" >SECURITY DEPOSIT</Typography>
              <Box display="flex" justifyContent="space-between" border="1px solid #2f3132" alignItems="center" padding="0 5px" width="200px"  >
                <Typography variant="caption">PKR</Typography>
                <Typography color="black">{secDepVal}</Typography>
              </Box>
            </Box>
          </Box>

        </Box>

      </Box>
    </RootBox>
  );
};

export default CarLoanCalculator;
