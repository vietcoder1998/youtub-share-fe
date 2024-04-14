import { act, render, screen, waitFor } from "@testing-library/react";
import { VideoListMock } from "../../../../__mock__/video.ts";
import { VideoApi } from "../../../../api/video.api.ts";
import { VideoList } from "../../../../pages/home-page/components/VideoList.tsx"; // Import the component you want to test

const mockApiGet = () => {
  jest.mock("axios")
  jest
    .spyOn(VideoApi.apiInstance.instance, "get")
    .mockImplementation(async (url: string) => {
      const path: string = url.replace(String(process?.env?.VITE_BASE_API), '')

      switch (path) {
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
            reason: "Not found any item"
          });
      }
    });
};

const mockApiPost = () => {
  jest
    .spyOn(VideoApi.apiInstance.instance, "post")
    .mockImplementation(async (url: string) => {
      switch (url) {
        case `/video`:
          return Promise.resolve({
            data: {
              dataList: VideoListMock,
            },
          });
        case `/video/${VideoListMock.at(0)?._id}/like`:
          return Promise.resolve({
            data: {
              detail: {
                ...VideoListMock.at(0),
                like: [],
              },
            },
          });
        case `/video/${VideoListMock.at(0)?._id}/dislike`:
          return Promise.resolve({
            data: {
              detail: {
                ...VideoListMock.at(0),
                dislike: [],
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
  mockApiPost();
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

let page: HTMLElement;

beforeEach(async () => {
  render(<VideoList />);
  // Use screen queries to interact with the rendered components
  page = await screen.findByTestId("video-list");
  waitFor(() => {
    expect(page).not.toBeNull();
  });
});

// Note: Happy case
describe("1.Happy Case: Get list of video", () => {
  it("renders the page correctly", async () => {
    const firstVideo = await screen.findByTestId(
      `video-${VideoListMock.at(0)?._id}`
    );

    waitFor(() => {
      expect(firstVideo).not.toBeNull();
    });

    const videos = page.querySelectorAll("iframe");

    expect(videos.length).not.toBe(NaN)
    expect(videos.length).not.toBe(0);
  });
});

// Note: Validation error

describe("2.Validation error", () => {
  it("2.1 Click with button like", async () => {
    const firstVideo = await screen.findByTestId(
      `video-${VideoListMock.at(0)?._id}`
    );

    waitFor(() => {
      expect(firstVideo).not.toBeNull();
    });

    const likeButton = await screen.findByTestId(
      `button-like-${VideoListMock.at(0)?._id}`
    );
    const dislike = await screen.findByTestId(
      `button-dislike-${VideoListMock.at(0)?._id}`
    );

    expect(likeButton).not.toBeNull();
    expect(dislike).not.toBeNull();

    const likeLabel = await screen.findByTestId(
      `video-${VideoListMock.at(0)?._id}-length-like`
    );

    const dislikeLabel = await screen.findByTestId(
      `video-${VideoListMock.at(0)?._id}-length-dislike`
    );

    act(() => {
      likeButton.click();
    });

    expect(Number(likeLabel.innerHTML)).toEqual(1);

    act(() => {
      dislike.click();
    });

    expect(Number(dislikeLabel.innerHTML)).toEqual(1);
  });
  it("2.2 Click with button with login", async () => {});
});
// Note: Common Error
// Note: Other Error
