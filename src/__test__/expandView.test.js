import React from "react";
import { create, act } from "react-test-renderer";
import ExpandView from "../components/ExpandView/expandView";

const tree = create(<ExpandView following={false} block={false} />);

test("Test follow button changes to unfollow", () => {
  const followBttn = tree.root.findByProps({ testID: "followBttn" }).props;
  act(() => followBttn.onPress());

  const followLabel = tree.root.findByProps({ testID: "followLabel" }).props;
  expect(followLabel.children).toContain("Unfollow");

  const blockBttn = tree.root.findByProps({ testID: "blockBttn" }).props;
  act(() => blockBttn.onPress());

  const blockLabel = tree.root.findByProps({ testID: "blockLabel" }).props;
  expect(blockLabel.children).toContain("Unblock");
});
