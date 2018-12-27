declare module 'thinkjs' {
  interface Context extends ThinkSession.SessionExtend {
  }

  interface Controller extends ThinkSession.SessionExtend {
  }
}

declare namespace ThinkSession {
  interface SessionExtend {
    /**
     * get session
     * @memberOf SessionExtend
     */
    session(name?: string): Promise<any>;
    /**
     * set session
     * @memberOf SessionExtend
     */
    session(name: string, value: any): Promise<any>;

    /**
     * delete the whole session
     * @memberOf SessionExtend
     */
    session(name: null): Promise<any>;
  }
}

export = ThinkSession;
