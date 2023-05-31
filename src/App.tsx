import React from 'react';
import { ConfigProvider } from 'antd';
import en_GB from 'antd/es/locale/en_GB';
import 'antd/dist/reset.css';

import Workspace from './Workspace';
import BlueprintSettingPage from './pages/SettingsPage/BlueprintSettingPage';

const App: React.FC = () => (
  <ConfigProvider locale={en_GB}>
    <Workspace>
      <BlueprintSettingPage />
    </Workspace>
  </ConfigProvider>
);

export default App;
