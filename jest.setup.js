// jest.setup.js

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
    on: (name, event) => {
      event(name);

      return name;
    },
  };
};

// Set up a global variable to use the mocked version of Socket.IO client
global = {
  io: mockSocket,
};
