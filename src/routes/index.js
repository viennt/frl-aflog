import React, { Fragment } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout } from '../components';
import { Main as MainLayout} from '../layouts';
import { Minimal as MinimalLayout} from '../layouts';

import {
  Landing as LandingView,
  Home as HomeView,
  Collaborate as CollaborateView,

  Profile as ProfileView,
  ProfileSetting as ProfileSettingView,

  About as AboutView,
  Contact as ContactView,
  NotFound as NotFoundView,
} from '../views';

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Redirect
          exact
          from="/"
          to="/Landing"
        />
        <RouteWithLayout
          component={LandingView}
          exact
          layout={MainLayout}
          path="/Landing"
        />
        <RouteWithLayout
          component={HomeView}
          exact
          layout={MainLayout}
          path="/Home"
        />
        <RouteWithLayout
          component={CollaborateView}
          exact
          layout={MainLayout}
          path="/Collaborate"
        />

        <RouteWithLayout
          component={ProfileView}
          exact
          layout={MinimalLayout}
          path="/Profile"
        />

        <RouteWithLayout
          component={ProfileSettingView}
          exact
          layout={MinimalLayout}
          path="/Profile/Setting"
        />

        <RouteWithLayout
          component={AboutView}
          exact
          layout={MinimalLayout}
          path="/About-us"
        />
        <RouteWithLayout
          component={ContactView}
          exact
          layout={MinimalLayout}
          path="/Contact"
        />
        <RouteWithLayout
          component={NotFoundView}
          exact
          layout={MinimalLayout}
          path="/not-found"
        />
        <Redirect to="/not-found" />
      </Switch>
    </Fragment>
  );
};

export default Routes;
