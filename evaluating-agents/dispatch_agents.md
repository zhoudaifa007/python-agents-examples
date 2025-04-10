## To dispatch the agents for testing:

lk dispatch create \
  --agent-name agent_to_test \  
  --room my-room \
  --metadata 'my_job_metadata'

lk dispatch create \
--agent-name agent_evaluator \
  --room my-room \
  --metadata 'my_job_metadata'