package org.hisrc.zugradarscraper.timedtrainroute.model;

import java.util.Objects;

import org.hisrc.zugradarscraper.stop.model.Stop;

public class EndStopVertex implements StopVertex {

	private final Stop stop;

	public EndStopVertex(Stop stop) {
		Objects.requireNonNull(stop, "stop must not be null");
		this.stop = stop;
	}

	public Stop getStop() {
		return stop;
	}

	@Override
	public String toString() {
		return stop.toString();
	}

	@Override
	public int hashCode() {
		return Objects.hash(this.stop);
	}

	@Override
	public boolean equals(Object object) {
		if (this == object) {
			return true;
		}
		if (object == null) {
			return false;
		}
		if (getClass() != object.getClass()) {
			return false;
		}
		final EndStopVertex that = (EndStopVertex) object;
		return Objects.equals(this.stop, that.stop);
	}

}
