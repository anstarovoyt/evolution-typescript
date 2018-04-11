type Base = { base() };
type Extension = Base & { extended() };

class Impl implements Extension {
    base() {}
    extended() {}
}



