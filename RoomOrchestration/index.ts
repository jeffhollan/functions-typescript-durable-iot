import * as df from "durable-functions"

const orchestrator = df.orchestrator(function* (context) {
    let outputs = [];
    context.log(`Someone entered the room. Starting room orchestration....`);
    // const req = context.df.getInput();

    // context.log(req);

    outputs.push(yield context.df.callActivity("NotifyMeetingStart", "blah"));

    return outputs;
    
});

export default orchestrator;
