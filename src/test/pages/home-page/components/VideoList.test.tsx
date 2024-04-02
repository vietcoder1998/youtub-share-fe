import { render, screen, waitFor } from "@testing-library/react";
import { VideoList } from "../../../../pages/home-page/components/VideoList"; // Import the component you want to test
import { VideoApi } from "../../../../api/video.api.ts";
import { VideoListMock } from "../../../../__mock__/video.ts";

const mockApiGet = () => {
  jest
    .spyOn(VideoApi.apiInstance.instance, "get")
    .mockImplementation(async (url) => {
      switch (url) {
        case `/video`:
          return Promise.resolve({
            data: {
              dataList: VideoListMock,
            },
          });
        case `/video/1`:
          return Promise.resolve({
            data: {
              detail: {
                id: 1,
              },
            },
          });
        default:
          return Promise.reject({
            data: {},
            status: 422,
            code: 422,
          });
      }
    });
};

// Set up environment
beforeAll(() => {
  mockApiGet();
  // Note: mock socket.io client
  jest.mock("axios");
  jest.mock("socket.io-client", () => ({
    __esModule: true,
    default: jest.fn(() => ({
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    })),
  }));

  jest.mock("react", () => ({
    ...jest.requireActual("react"), // Preserve the original React module
    useContext: jest.fn(() => {
      return {
        socket: jest.fn(() => ({
          on: jest.fn(),
          off: jest.fn(),
          emit: jest.fn(),
        })),
      };
    }), // Mock useContext
  }));
});

// Note: Happy case
describe("1.Happy Case: Get list of video", () => {
  it("renders the page correctly", async () => {
    render(<VideoList />);
    // Use screen queries to interact with the rendered components
    const page = await screen.findByTestId("video-list");
    waitFor(() => {
      expect(page).not.toBeNull();
    });

    const firstVideo = await screen.findByTestId(
      `video-${VideoListMock.at(0)?._id}`
    );

    waitFor(() => {
      expect(firstVideo).not.toBeNull();
    });

    const videos = page.querySelectorAll("iframe");

    expect(videos.length).toBe(2);
  });
});

// Note: Validation error

describe("2.Validation error", () => {
  it("2.1 Login with error", async () => {
    render(<VideoList />);
  });
});
// Note: Common Error
// Note: Other Error
