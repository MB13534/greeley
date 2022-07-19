import React from "react";
import { IconButton, Box, Tooltip } from "@material-ui/core";
import GraphIcon from "@material-ui/icons/BarChart";

const GraphModeToggle = ({ open = false, handleClick }) => {
  return (
    <Box
      bgcolor="#ffffff"
      boxShadow="0 0 0 2px rgba(0,0,0,.1)"
      borderRadius={4}
      position="absolute"
      zIndex={1}
      top={58}
      right={10}
      display="flex"
      flexDirection="column"
    >
      <Tooltip title="Graph Mode" placement="left">
        <IconButton
          size="small"
          color={open ? "secondary" : "default"}
          onClick={handleClick}
        >
          <GraphIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default GraphModeToggle;
