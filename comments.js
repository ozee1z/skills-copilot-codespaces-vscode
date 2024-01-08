// Create web server
const app = express();

// Configure middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/notes', notes);

// Catch all other routes and return the index file
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Set port
const port = process.env.PORT || '5000';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// Listen on provided port, on all network interfaces
server.listen(port, () => console.log(`Server running on localhost:${port}`));