import GlobalHeader from './../library/exampleComponents/GlobalHeader';
import CodeEditor from './pages/components/CodeEditor';
import FeatureList from './pages/components/FeatureList';
import ExperienceExamplesPage from './pages/ExperienceExamplesPage';
import GettingStartedPage from './pages/GettingStartedPage';
import DesignsPage from './pages/DesignsPage';

global.GlobalHeader = GlobalHeader;
global.CodeEditor = CodeEditor;
global.FeatureList = FeatureList;
global.ExperienceExamplesPage = ExperienceExamplesPage;
global.GettingStartedPage = GettingStartedPage;
global.DesignsPage = DesignsPage;

global.LIBRARY_GOOGLE_MAPS_APIKEY = process.env.REACT_APP_GOOGLE_MAPS_APIKEY;
global.LIBRARY_RECAPTCHA_APIKEY = process.env.REACT_APP_RECAPTCHA_APIKEY;
