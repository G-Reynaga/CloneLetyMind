interface Window {
  particlesInit(Engine): Promise<void>;
  particlesLoaded(Container): void;
  }