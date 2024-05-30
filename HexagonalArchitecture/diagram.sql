                  +------------------+
                  |   User Interface |
                  +--------^---------+
                           |
    +-----------+   +------|------+
    |   Driven  |   |    Ports    |   +--------+  +-------------+
    |  Adapters |<->| Application |<->|  Ports |  |  Driving    |
    |           |   |    Core     |   +--------+  |  Adapters   |
    +-----------+   +-------------+               +-------------+
       Database        Business Logic               Web Service
       (e.g., SQL)      (e.g., Use Cases)              (e.g., REST)