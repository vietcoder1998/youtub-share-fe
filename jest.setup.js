// jest.setup.js
// mock env
jest.mock("vite", () => ({
  meta: {
    env: {
      VITE_BASE_URL: "http://localhost:5173",
      VITE_BASE_API: "http://localhost:3030",
      VITE_WS: "ws://localhost:3031"
    },
  },
}));

// Import the Socket.IO client mock
/**
 * [mockSocket description]
 *
 * @param   {string}  connection  mock with connection name
 *
 * @return  {}              [return description]
 */
const mockSocket = (connection) => {
  return {
    connection,
    emit: (name, event) => {
      event(name);

      return event;
    },
    on: jest.fn(),
  };
};

const { initReactI18next, useTranslation } = require("react-i18next");
const i18n = require("i18next");

// Initialize i18next
i18n.use(initReactI18next).init({
  resources: {},
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }), // Mock implementation of useTranslation
}));

global = {
  io: mockSocket,
  useTranslation: () => ({ t: (key) => key }), // Mock implementation of useTranslation

  AppContext: {
    socket: {
      on: () => {
        return () => jest.fn();
      },
    },
  },
};
