List of System Architecture Patterns

1.  Monolithic Architecture
    Single codebase and deployable unit (web, API, DB all together).
    Pros: Simple, fast to develop.
    Cons: Hard to scale, deploy, or change independently.

2.  Layered Architecture (N-tier)
    Divides codebase into layers: Presentation → Business Logic → Data Access → Database.
    Common in: Java EE, ASP.NET, Spring
    Pros: Organized structure, separation of concerns.
    Cons: Can lead to tight coupling and slow response time.

3.  Microservices Architecture
    System is split into small, independently deployable services.
    Each service owns its data and logic.
    Communication: REST, gRPC, or events.
    Pros: Scalable, independent deployment.
    Cons: Complexity in orchestration, monitoring, transactions.

4.  Service-Oriented Architecture (SOA)
    Similar to microservices but with heavier protocols (e.g., SOAP).
    Often uses an Enterprise Service Bus (ESB).
    Pros: Reusability across departments.
    Cons: Heavyweight and harder to evolve.

5.  Event-Driven Architecture
    Components communicate through asynchronous events.
    Types:
    Event Notification (trigger-based),
    Event-Carried State Transfer (data in event),
    Event Sourcing (event log = source of truth)
    Pros: Loose coupling, real-time flows.
    Cons: Harder to trace/debug, eventual consistency.

6.  Microkernel Architecture (Plugin-Based)
    Core system + plug-in modules that extend functionality.
    Examples: Eclipse IDE, CMS platforms
    Pros: Extensible, modular.
    Cons: Plugin lifecycle and API stability.

7.  Space-Based Architecture
    System split across multiple processing units (nodes) with shared in-memory data.
    Used for high-throughput, low-latency systems (trading, gaming).
    Examples: GigaSpaces, Hazelcast
    Pros: Eliminates bottlenecks.
    Cons: Complex data replication and fault-tolerance.

8.  Client-Server Architecture
    Client sends requests, server processes and responds.
    Foundation for most web/mobile apps.
    Variants: 2-tier, 3-tier, multi-tier
    Pros: Simplicity, clear separation.
    Cons: Scalability depends on server side.

9.  Peer-to-Peer (P2P) Architecture
    All nodes act as both client and server.
    Examples: BitTorrent, blockchain
    Pros: Decentralized, fault-tolerant.
    Cons: Security, consistency, coordination.

10. Cloud-Native / Serverless Architecture
    Uses functions (FaaS), containers, managed services.
    Examples: AWS Lambda, Azure Functions, Firebase
    Pros: Scalable, no infra management.
    Cons: Cold starts, observability, vendor lock-in.

11. API Gateway Architecture
    API Gateway routes requests to appropriate services.
    Handles cross-cutting concerns: auth, throttling, caching.
    Pros: Centralized control.
    Cons: Gateway can become a bottleneck.

12. Hexagonal Architecture (Ports & Adapters)
    Core logic (inside) interacts with outside systems via ports and adapters.
    Enables easy testing and isolation of core business logic.
    Pros: Highly testable, maintainable.
    Cons: Extra complexity for small projects.

13. Clean Architecture (Onion)
    Layers: Entities → Use Cases → Interface Adapters → Frameworks/DB
    Core logic has no dependency on infrastructure.
    Pros: Long-term maintainability.
    Cons: Learning curve, boilerplate.

14. CQRS (Command Query Responsibility Segregation)
    Separate write (commands) and read (queries) models.
    Often paired with Event Sourcing.
    Pros: Optimized performance, clear intent.
    Cons: Complexity, eventual consistency.

15. Multi-Tenant Architecture
    One backend supports multiple customers (tenants).
    Approaches: shared DB, isolated DB, hybrid.
    Pros: Cost-effective, scalable for SaaS.
    Cons: Data isolation, customization per tenant.

16. Distributed Architecture
    System components run on multiple networked nodes.
    Includes microservices, event-driven, and hybrid systems.
    Pros: High availability, horizontal scaling.
    Cons: Complexity in coordination, latency, consistency (CAP theorem).
