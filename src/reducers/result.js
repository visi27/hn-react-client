import * as actionTypes from '../constants/actionTypes';
import conf from '../config';

const initialState = {
  hits: [],
  page: 0,
  nbPages: 0,
  searchTerm: conf.DEFAULT_QUERY,
};

const staticRsults = [
  {
    created_at: '2018-04-03T09:35:47.000Z',
    title: 'Study shows salaries of young women 8% higher than men in their peer group',
    title_highlighted: 'Study shows salaries of young women 8% higher than men in their peer group',
    url: 'http://content.time.com/time/business/article/0,8599,2015274,00.html',
    author: 'kristianc',
    points: 1,
    story_text: null,
    num_comments: 0,
    objectID: '16582136',
  },
  {
    created_at: '2018-04-03T09:34:34.000Z',
    title: 'Armageddon and Paranoia (mice stopped half the Panzers at Stalingrad)',
    title_highlighted: 'Armageddon and Paranoia (mice stopped half the Panzers at Stalingrad)',
    url: 'http://hitchensblog.mailonsunday.co.uk/2018/03/armageddon-and-paranoia.html',
    author: 'B1FF_PSUVM',
    points: 1,
    story_text: null,
    num_comments: 0,
    objectID: '16582137',
  },
  {
    created_at: '2018-04-03T09:33:50.000Z',
    title: '5 Open Source Libraries to Aid in Your Machine Learning Endeavors',
    title_highlighted: '5 Open Source Libraries to Aid in Your Machine Learning Endeavors',
    url: 'https://www.entrepreneur.com/article/310965',
    author: 'aaron_p',
    points: 1,
    story_text: null,
    num_comments: 0,
    objectID: '16582138',
  },
  {
    created_at: '2018-04-03T09:30:43.000Z',
    title: 'Facebook hate speech exploded in Myanmar during Rohingya crisis',
    title_highlighted: 'Facebook hate speech exploded in Myanmar during Rohingya crisis',
    url:
      'https://www.theguardian.com/world/2018/apr/03/revealed-facebook-hate-speech-exploded-in-myanmar-during-rohingya-crisis',
    author: 'rumcajz',
    points: 1,
    story_text: null,
    num_comments: 0,
    objectID: '16582139',
  },
  {
    created_at: '2018-04-03T09:29:44.000Z',
    title: 'Apple Killing Intel on Macs? This Is Big',
    title_highlighted: 'Apple Killing Intel on Macs? This Is Big',
    url: 'https://www.tomsguide.com/us/apple-killing-intel-chips-macs,news-26900.html',
    author: 'aaron_p',
    points: 1,
    story_text: null,
    num_comments: 0,
    objectID: '16582140',
  },
  {
    created_at: '2018-04-03T09:29:21.000Z',
    title: 'Can Uber Ever Deliver? The New Yorker Lays Out Template for Pro-Uber Propaganda',
    title_highlighted:
      'Can Uber Ever Deliver? The New Yorker Lays Out Template for Pro-Uber Propaganda',
    url:
      'https://www.nakedcapitalism.com/2018/04/hubert-horan-can-uber-ever-deliver-part-fourteen-new-yorker-lays-template-pro-uber-propaganda.html',
    author: 'Cbasedlifeform',
    points: 1,
    story_text: null,
    num_comments: 0,
    objectID: '16582141',
  },
  {
    created_at: '2018-04-03T09:28:59.000Z',
    title: 'India withdraws sweeping new rule clamping down on fake news',
    title_highlighted: 'India withdraws sweeping new rule clamping down on fake news',
    url:
      'http://abcnews.go.com/International/wireStory/india-government-issues-sweeping-rule-control-fake-news-54195750',
    author: 'randomerr',
    points: 1,
    story_text: null,
    num_comments: 0,
    objectID: '16582142',
  },
  {
    created_at: '2018-04-03T09:25:14.000Z',
    title: 'Speeding up JetBrains IDE – catalinxyz.com',
    title_highlighted: 'Speeding up JetBrains IDE – catalinxyz.com',
    url: 'https://catalinxyz.com/speeding-up-phpstorm/',
    author: 'catalinxyz',
    points: 1,
    story_text: null,
    num_comments: 0,
    objectID: '16582142',
  },
  {
    created_at: '2018-04-03T09:24:01.000Z',
    title: 'Chaos Tools and Techniques for Testing the TiDB Distributed NewSQL Database',
    title_highlighted:
      'Chaos Tools and Techniques for Testing the TiDB Distributed NewSQL Database',
    url:
      'https://thenewstack.io/chaos-tools-and-techniques-for-testing-the-tidb-distributed-newsql-database/',
    author: 'r4um',
    points: 1,
    story_text: null,
    num_comments: 0,
    objectID: '16582143',
  },
  {
    created_at: '2018-04-03T09:24:00.000Z',
    title: 'Why you need a business mentor',
    title_highlighted: 'Why you need a business mentor',
    url: 'https://www.venturi-group.com/podcast/business-mentors/',
    author: 'venturis_voice',
    points: 1,
    story_text: null,
    num_comments: 0,
    objectID: '16582144',
  },
  {
    created_at: '2018-04-03T09:22:49.000Z',
    title: 'Ask HN: Why p2p encrypted messaging still sucks?',
    title_highlighted: 'Ask HN: Why p2p encrypted messaging still sucks?',
    url: null,
    author: 'xstartup',
    points: 1,
    story_text:
      'I chat with my teammates (who are ready to agree on a particular messenger)<p>So, far we&#x27;ve tried<p>1. Telegram - The problem here is that E2E encrypted messaging (secret chat) is not available on the desktop.<p>2. Tox - Works everywhere but qtox crashes randomly on Mac. Antox also doesn&#x27;t work well on Android either. Utox crashes randomly on Linux. Qtox has no way to disable notification on Linux.<p>3. Whatsapp - You always need your phone android<p>4. Signal - Message syncs is very slow if you switch between desktop&#x2F;phone often.<p>I&#x27;ve reported these issues to all these projects but it&#x27;s been a long time and nothing resolved so far.<p>The situation is still pathetic. What do you recommend?',
    num_comments: 0,
    objectID: '16582145',
  },
  {
    created_at: '2018-04-03T09:20:08.000Z',
    title: '70mm version of 2OO1: A Space Odyssey to be shown in Cannes and some US theaters',
    title_highlighted:
      '70mm version of 2OO1: A Space Odyssey to be shown in Cannes and some US theaters',
    url:
      'https://www.businesswire.com/news/home/20180328006021/en/Warner-Bros.-Pictures-Celebrates-50-Years-Stanley',
    author: 'nier',
    points: 2,
    story_text: null,
    num_comments: 1,
    objectID: '16582146',
  },
  {
    created_at: '2018-04-03T09:20:06.000Z',
    title: 'Combining Cynefin with Swarming for Better Incident Management',
    title_highlighted: 'Combining Cynefin with Swarming for Better Incident Management',
    url:
      'https://medium.com/@JonHall_/using-swarming-to-deliver-cynefin-in-tech-support-34dc4992e3e0',
    author: 'r4um',
    points: 1,
    story_text: null,
    num_comments: 0,
    objectID: '16582147',
  },
  {
    created_at: '2018-04-03T09:19:09.000Z',
    title: 'On Ways to Agree, Part 1: Links, Generals and Impossibility Problem',
    title_highlighted: 'On Ways to Agree, Part 1: Links, Generals and Impossibility Problem',
    url:
      'https://medium.com/databasss/on-ways-to-agree-part-1-links-and-flp-impossibility-f6bd8a6a0980',
    author: 'r4um',
    points: 1,
    story_text: null,
    num_comments: 0,
    objectID: '16582148',
  },
  {
    created_at: '2018-04-03T09:17:37.000Z',
    title: 'Networking for Founders',
    title_highlighted: 'Networking for Founders',
    url: 'https://stripe.com/atlas/guides/networking',
    author: 'shubhamjain',
    points: 1,
    story_text: null,
    num_comments: 0,
    objectID: '16582149',
  },
  {
    created_at: '2018-04-03T09:16:44.000Z',
    title: "Making a Civilization-Scale Crafting System for Jason Rohrer's One Hour One Life",
    title_highlighted:
      "Making a Civilization-Scale Crafting System for Jason Rohrer's One Hour One Life",
    url:
      'https://www.gamasutra.com/view/news/315954/Making_a_civilizationscale_crafting_system_for_Jason_Rohrers_One_Hour_One_Life.php',
    author: 'NicoJuicy',
    points: 2,
    story_text: null,
    num_comments: 0,
    objectID: '16582150',
  },
  {
    created_at: '2018-04-03T09:14:50.000Z',
    title: 'Show HN: I made a site that lets you search and subscribe to “Who is hiring?”',
    title_highlighted:
      'Show HN: I made a site that lets you search and subscribe to “Who is hiring?”',
    url: 'https://whoishiring.me/',
    author: 'rutierut',
    points: 3,
    story_text: null,
    num_comments: 0,
    objectID: '16582151',
  },
  {
    created_at: '2018-04-03T09:14:33.000Z',
    title: "Amazon's Lumberyard-powered brawler Breakaway is no more",
    title_highlighted: "Amazon's Lumberyard-powered brawler Breakaway is no more",
    url:
      'https://www.gamasutra.com/view/news/316021/Amazons_Lumberyardpowered_brawler_Breakaway_is_no_more.php',
    author: 'NicoJuicy',
    points: 3,
    story_text: null,
    num_comments: 0,
    objectID: '16582152',
  },
  {
    created_at: '2018-04-03T09:14:25.000Z',
    title: 'Microsoft quantum computing scientists have captured a Majorana quasiparticle',
    title_highlighted:
      'Microsoft quantum computing scientists have captured a Majorana quasiparticle',
    url:
      'https://www.neowin.net/news/microsoft-quantum-computing-scientists-have-captured-a-majorana-quasiparticle',
    author: 'ThoAppelsin',
    points: 2,
    story_text: null,
    num_comments: 0,
    objectID: '16582153',
  },
  {
    created_at: '2018-04-03T09:14:08.000Z',
    title: 'Greatest April Fools Prank of All Time Took 4 Years to Plan, Involved a Volcano',
    title_highlighted:
      'Greatest April Fools Prank of All Time Took 4 Years to Plan, Involved a Volcano',
    url:
      'http://www.iflscience.com/environment/the-greatest-april-fools-day-prank-of-all-time-took-four-years-to-plan-and-involved-a-volcano/',
    author: 'Eurongreyjoy',
    points: 1,
    story_text: null,
    num_comments: 0,
    objectID: '16582154',
  },
];

function fetchResult(state) {
  sessionStorage.setItem('TEST', staticRsults);
  return {
    ...state,
    hits: staticRsults,
    page: 1,
    nbPages: 1,
  };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESULT_FETCH:
      return fetchResult(state, action);
    case actionTypes.SEARCH_SET:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    case actionTypes.SEARCH_RESET:
      return {
        ...state,
        searchTerm: conf.DEFAULT_QUERY,
      };
    default:
      return state;
  }
}
