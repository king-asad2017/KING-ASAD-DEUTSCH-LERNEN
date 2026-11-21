
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: #f1f5f9;
  color: #1e293b;
  line-height: 1.8;
}

header {
  background: linear-gradient(135deg, #101d3a, #2457a6);
  color: white;
  text-align: center;
  padding: 35px 15px;
  border-bottom: 5px solid #f5b82e;
}

header h1 {
  font-size: 32px;
  margin-bottom: 8px;
}

header p {
  font-size: 17px;
}

select {
  margin-top: 18px;
  padding: 12px 25px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
}

main {
  max-width: 1000px;
  margin: 30px auto;
  padding: 15px;
}

main h2 {
  text-align: center;
  margin-bottom: 25px;
  color: #16376b;
}

section {
  background: white;
  padding: 25px;
  margin: 20px 0;
  border-radius: 15px;
  border-right: 5px solid #e6aa24;
  box-shadow: 0 4px 15px rgba(0,0,0,0.07);
}

section h3 {
  color: #17468c;
  margin-bottom: 12px;
}

section p {
  padding: 5px;
  font-size: 16px;
}

button {
  background: #17468c;
  color: white;
  padding: 12px 25px;
  margin: 8px;
  border: none;
  border-radius: 9px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background: #e6aa24;
  color: #14213d;
}

footer {
  background: #101d3a;
  color: white;
  text-align: center;
  padding: 25px;
  margin-top: 40px;
}

@media (max-width: 600px) {
  header h1 {
    font-size: 25px;
  }

  section {
    padding: 18px;
  }
}
