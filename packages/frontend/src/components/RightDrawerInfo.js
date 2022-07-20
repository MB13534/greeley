import React from "react";
import styled from "styled-components/macro";
import {
  Drawer,
  Fab as MuiFab,
  List,
  ListItem,
  ListItemText,
  Typography as MuiTypography,
} from "@material-ui/core";
import Info from "@material-ui/icons/Info";
import LinkIcon from "@material-ui/icons/Link";
import { customSecondary } from "../theme/variants";
import { NavLink } from "react-router-dom";
import { darken, rgba } from "polished";

const LinkText = styled(ListItemText)`
  color: ${(props) => props.theme.sidebar.color};
  span {
    font-size: ${(props) => props.theme.typography.body1.fontSize}px;
  }
  margin-top: 0;
  margin-bottom: 0;
`;

const Fab = styled(MuiFab)`
  position: fixed;
  top: calc(110px);
  right: -215px;
  z-index: 1000;
  padding-right: 100px;
  transition: right 0.25s ease-out 0.25s;

  &:hover {
    right: -90px;
  }
`;

const InfoIcon = styled(Info)`
  margin-right: 10px;
`;

const StyledLinkIcon = styled(LinkIcon)`
  margin-right: 10px;
`;

const Items = styled.div`
  padding-top: ${(props) => props.theme.spacing(2.5)}px;
  padding-bottom: ${(props) => props.theme.spacing(2.5)}px;
`;

const Brand = styled(ListItem)`
  background-color: ${(props) => props.theme.sidebar.header.background};
  min-height: 56px;
  padding-left: ${(props) => props.theme.spacing(6)}px;
  justify-content: start;
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  color: ${(props) => props.theme.sidebar.header.color};
  font-family: ${(props) => props.theme.typography.fontFamily};

  ${(props) => props.theme.breakpoints.up("sm")} {
    min-height: 64px;
  }

  &:hover {
    background-color: ${(props) => props.theme.sidebar.header.background};
  }
`;

const BrandIcon = styled.img`
  border-radius: 50%;
  margin-right: 16px;
`;

const SidebarSection = styled(MuiTypography)`
  color: ${() => customSecondary[500]};
  padding: ${(props) => props.theme.spacing(4)}px
    ${(props) => props.theme.spacing(7)}px
    ${(props) => props.theme.spacing(1)}px;
  opacity: 0.9;
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  display: block;
`;

const Link = styled(ListItem)`
  // padding-left: ${(props) => props.theme.spacing(17.5)}px;
  padding-top: ${(props) => props.theme.spacing(2)}px;
  padding-bottom: ${(props) => props.theme.spacing(2)}px;

  svg {
    color: ${(props) => props.theme.sidebar.color};
    font-size: 20px;
    width: 20px;
    height: 20px;
    opacity: 0.5;
  }

  span {
    color: ${(props) => rgba(props.theme.sidebar.color, 0.7)};
  }

  &:hover span {
    color: ${(props) => rgba(props.theme.sidebar.color, 0.9)};
  }

  &:hover {
    background-color: ${(props) =>
      darken(0.015, props.theme.sidebar.background)};
  }

  &.${(props) => props.activeClassName} {
    background-color: ${(props) =>
      darken(0.03, props.theme.sidebar.background)};

    span {
      color: ${(props) => props.theme.sidebar.color};
    }
  }
`;

export function RightDrawerInfo({ links }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen((state) => !state);
  };

  const SidebarLink = ({ url, text }) => {
    return (
      <Link
        button
        dense
        rel="noreferrer noopener"
        component="a"
        target="_blank"
        href={url}
      >
        <StyledLinkIcon />
        <LinkText>{text}</LinkText>
      </Link>
    );
  };

  const SidebarLinks = ({ links }) => {
    return (
      <>
        {links.map((link) => {
          return (
            <React.Fragment key={link.chapter}>
              <SidebarSection>{link.chapter}</SidebarSection>
              {link.links.map((item) => {
                return (
                  <SidebarLink
                    key={item.title}
                    url={item.url}
                    text={item.title}
                  />
                );
              })}
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Fab color="primary" variant="extended" onClick={toggleDrawer}>
        <InfoIcon />
        More Information
      </Fab>
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Brand
          component={NavLink}
          to="/"
          button
          style={{
            pointerEvents: "all",
          }}
        >
          <BrandIcon
            src={`/static/img/greeley-logo-square.jpg`}
            width="40"
            height="40"
            alt="Greeley Icon"
          />
          More Information
        </Brand>
        <List disablePadding>
          <Items>
            <SidebarLinks links={links} />
          </Items>
        </List>
      </Drawer>
    </>
  );
}
