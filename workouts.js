import axios from "axios";


// Sample Data of workouts
// Workouts should be downloaded from the database and populate a js file in this manner
export const listWorkouts = [

    {name: '4 Day Upper/Lower', key: '1'},
    {name: '4 Day Push/Pull/Legs/Cardio', key: '2'},
    {name: '5 Day Push/Pull/Legs/Upper/Lower', key: '3'},
    {name: '5 Day Uper/Lower/Cardio/Upper/Lower', key: '4'},
    {name: '6 Day Push/Pull/legs/Cardio/Upper/Lower', key: '5'},
    {name: 'Custom Workout 1', key: '6'},
    {name: 'Custom Workout 2', key: '7'},
    {name: 'Custom Workout 3', key: '8'},
    {name: 'Custom Workout 4', key: '9'},
    {name: 'Custom Workout 5', key: '10'},

];

// Sample Data recently completed workouts
// Download recently completed workouts from database and store them like this
export const recentlyCompleted = [

    {name: 'Custom Workout 1', key: '1', dateCompleted: '04/10/2022 10:48'},
    {name: 'Custom Workout 2', key: '2', dateCompleted: '04/11/2022 22:16'},
    {name: 'Custom Workout 2', key: '3', dateCompleted: '04/12/2022 20:57'},
    {name: 'Custom Workout 9', key: '4', dateCompleted: '04/13/2022 01:20'},
    {name: 'Custom Workout 11', key: '5', dateCompleted: '04/16/2022 06:50'},
    {name: 'Custom Workout 6', key: '6', dateCompleted: '04/18/2022 09:41'},
    {name: 'Custom Workout 11', key: '7', dateCompleted: '04/20/2022 11:11'},
    {name: 'Custom Workout 2', key: '8', dateCompleted: '04/21/2022 12:01'},
    {name: 'Custom Workout 13', key: '9', dateCompleted: '04/23/2022 19:18'},

];



/*
function getWorkouts() {
    const [data, setData] = useState(null);
  
    const fetchData = async () => {
      const response = await fetch("https://shreddit-ucf.herokuapp.com/api/displaySessions", 
                      {method: 'POST', body: js, headers:{'Content-Type':'application/json'}});
      const data = await response.json();
      setData(data);
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  }*/