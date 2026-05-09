import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type AppLayoutProps = {
  children: ReactNode;
};

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Tasks', to: '/tasks' },
  { label: 'About', to: '/about' },
];

function AppLayout({ children }: AppLayoutProps) {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ gap: 1 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HomeTasks
          </Typography>
          {navItems.map((item) => (
            <Button key={item.to} component={NavLink} to={item.to}>
              {item.label}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
}

export default AppLayout;
