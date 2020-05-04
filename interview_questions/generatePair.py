def genpair(id, q, a):
    id = str(id)
    print(f"""
          <div class="card">
            <div class="card-header text-left" id="heading{id}">
	      <span data-toggle="collapse" data-target="#collapse{id}">
                <b>{q}</b>
              </span>
            </div>
            <div id="collapse{id}" class="collapse" aria-labelledby="heading{id}" data-parent="#accordionExample">
              <div class="card-body">
		{a}
              </div>
            </div>
          </div>

    
    """.replace('\n', ''))
    print()
    
