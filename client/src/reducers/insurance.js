import {
  ADD_INSURANCE,
  DELETE_INSURANCE,
  GET_INSURANCE,
  GET_INSURANCES,
  INSURANCE_ERROR,
  UPDATE_INSURANCE,
} from "../actions/types";

const initialState = {
  insurances: null,
  loading: true,
  insurance: null,
};

export default function auth(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case GET_INSURANCES:
      return {
        ...state,
        loading: false,
        insurances: payload,
      };

    case GET_INSURANCE:
      return {
        ...state,
        loading: false,
        insurance: payload,
      };
    case DELETE_INSURANCE:
      return {
        ...state,
        insurances: state.insurances.filter(
          (insurance) => insurance._id !== payload
        ),
        loading: false,
      };
    case ADD_INSURANCE: {
      return {
        ...state,
        insurances: state.insurances
          ? [payload, ...state.insurances]
          : [payload],
      };
    }

    case UPDATE_INSURANCE:
      return {
        ...state,
        insurances: state.insurances.map((insurance) => {
          if (insurance._id === payload._id) {
            return payload;
          } else {
            return insurance;
          }
        }),
      };
    case INSURANCE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
