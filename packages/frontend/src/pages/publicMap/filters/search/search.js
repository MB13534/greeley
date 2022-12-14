import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ClickAwayListener,
  Divider,
  Grid,
  InputAdornment,
  List,
  ListItem,
  Paper,
  Popper,
  TextField,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Fuse from "fuse.js";
import axios from "axios";
import { useQuery } from "react-query";
import useDebounce from "../../../../hooks/useDebounce";

const SearchResults = ({
  anchorEl,
  open,
  onClose,
  onSelect,
  searchResults,
}) => {
  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement="bottom-start"
      style={{ zIndex: 3 }}
      transition
    >
      <ClickAwayListener onClickAway={onClose}>
        <Paper style={{ width: 400, height: 355, overflowY: "auto" }}>
          <List dense component="nav" aria-label="main mailbox folders">
            {searchResults?.slice(0, 49)?.map((result, i) => (
              <React.Fragment key={i}>
                <ListItem
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                  button
                  onClick={() => onSelect(result?.item)}
                >
                  <Typography variant="subtitle1">
                    {result?.item?.station_name}
                  </Typography>
                  <Grid container>
                    <Grid item xs={4}>
                      <Typography variant="caption">Station ID</Typography>
                      <Typography variant="body1">
                        {result?.item?.station_id || "N/A"}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">County</Typography>
                      <Typography variant="body1">
                        {result?.item?.county || "N/A"}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">Waterbodies</Typography>
                      <Typography variant="body1">
                        {result?.item?.waterbody || "N/A"}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={4}>
                      <Typography variant="caption">Media</Typography>
                      <Typography variant="body1">
                        {result?.item?.media || "N/A"}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">Location Type</Typography>
                      <Typography variant="body1">
                        {result?.item?.locationtype || "N/A"}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">Organization</Typography>
                      <Typography variant="body1">
                        {result?.item?.organization || "N/A"}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </ClickAwayListener>
    </Popper>
  );
};

const Search = ({ onSelect }) => {
  const searchRef = useRef(null);
  const { data: options } = useQuery(
    ["Search Options"],
    async () => {
      try {
        return await axios.get(
          `${process.env.REACT_APP_ENDPOINT}/api/public-map/wells`
        );
      } catch (err) {
        console.error(err);
      }
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  const [value, setValue] = useState("");
  const debouncedSearchValue = useDebounce(value, 200);
  const [searchResults, setSearchResults] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(!!searchResults?.length);
  }, [searchResults]);

  const fuzzySearcher = useMemo(() => {
    if (options?.data) {
      return new Fuse(options?.data, {
        ignoreLocation: true,
        keys: [
          "station_name",
          "station_id",
          "county",
          "waterbody",
          "media",
          "locationtype",
          "organization",
        ],
      });
    }
  }, [options]);

  const handleClose = (event) => {
    if (searchRef.current && searchRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleChange = (event) => {
    setValue(event?.target?.value);
  };

  useEffect(() => {
    const results = fuzzySearcher && fuzzySearcher.search(debouncedSearchValue);
    setSearchResults(results);
  }, [debouncedSearchValue, fuzzySearcher]);

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Individual Locations Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
        onFocus={() => !!value && setOpen(true)}
        placeholder="Locations attributes"
        ref={searchRef}
        style={{ width: "100%", minWidth: "220px" }}
        type="search"
        value={value}
        variant="outlined"
        size="small"
      />
      <SearchResults
        anchorEl={searchRef?.current}
        onClose={handleClose}
        onSelect={onSelect}
        open={open}
        searchResults={searchResults}
      />
    </>
  );
};

export default Search;
