function traverseTCPStates(eventList){
  var state = "CLOSED";  
  for(var e in eventList){ // for every variable in eventList
    switch(state){ // cycle through each state
      case "CLOSED":
        state = (eventList[e] == "APP_PASSIVE_OPEN") ? "LISTEN"   : 
                (eventList[e] == "APP_ACTIVE_OPEN" ) ? "SYN_SENT" : "ERROR"; 
        break;
      case "LISTEN":
        state = (eventList[e] == "RCV_SYN"  ) ? "SYN_RCVD" :
                (eventList[e] == "APP_SEND" ) ? "SYN_SENT" :
                (eventList[e] == "APP_CLOSE") ? "CLOSED"   : "ERROR";
        break;
      case "SYN_RCVD":
        state = (eventList[e] == "APP_CLOSE") ? "FIN_WAIT_1"  :
                (eventList[e] == "RCV_ACK"  ) ? "ESTABLISHED" : "ERROR";
        break;
      case "SYN_SENT":
        state = (eventList[e] == "RCV_SYN"    ) ? "SYN_RCVD"    :
                (eventList[e] == "RCV_SYN_ACK") ? "ESTABLISHED" :
                (eventList[e] == "APP_CLOSE"  ) ? "CLOSED"      : "ERROR";
        break;
      case "ESTABLISHED":
        state = (eventList[e] == "APP_CLOSE") ? "FIN_WAIT_1" :
                (eventList[e] == "RCV_FIN"  ) ? "CLOSE_WAIT" : "ERROR";
        break;
      case "FIN_WAIT_1":
        state = (eventList[e] == "RCV_FIN"    ) ? "CLOSING"    :
                (eventList[e] == "RCV_FIN_ACK") ? "TIME_WAIT"  :
                (eventList[e] == "RCV_ACK"    ) ? "FIN_WAIT_2" : "ERROR";
        break;
      case "CLOSING":
        state = (eventList[e] == "RCV_ACK"    ) ? "TIME_WAIT" : "ERROR";
        break;
      case "FIN_WAIT_2":
        state = (eventList[e] == "RCV_FIN"    ) ? "TIME_WAIT" : "ERROR";
        break;
      case "TIME_WAIT":
        state = (eventList[e] == "APP_TIMEOUT") ? "CLOSED"    : "ERROR";
        break;
      case "CLOSE_WAIT":
        state = (eventList[e] == "APP_CLOSE"  ) ? "LAST_ACK"  : "ERROR";
        break;
      case "LAST_ACK":
        state = (eventList[e] == "RCV_ACK"    ) ? "CLOSED"    : "ERROR";
        break;
    }
  }
  return state;
}